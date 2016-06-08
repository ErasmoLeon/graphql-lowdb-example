import models from '../models';

import { findById as findChannelById } from './../services/channel.service';

import { findById as findUserById } from './../services/user.service';

export const findById = (id, fullInfo = false) => {
  const include = [{ model: models.channel }, { model: models.tag }, { model: models.user }];
  return models.article.findById(id, fullInfo ? { include } : null);
};

export const findOne = where => models.article.findOne({ where });

export const buildFindOrCreateTagsPromises = tags => {
  const tagPromises = tags.map(tag => {
    const tagInfo = {
      name: tag.name,
    };
    return models.tag.findOrCreate({
      where: tagInfo,
      defaults: tagInfo,
    });
  });
  return tagPromises;
};

export const attachTags = (article, tags) => {
  const attachPromise = new Promise(resolve => {
    Promise.all(buildFindOrCreateTagsPromises(tags))
      .then(tagsResults => {
        resolve(article.setTags(tagsResults.map(tag => tag[0])));
      });
  });
  return attachPromise;
};

export const store = data => {
  const newArticlePromise = new Promise((resolve, reject) => {
    Promise.all([
      findChannelById(data.channel_id),
      findUserById(data.user_id),
    ]).then(results => {
      const channel = results[0];
      const user = results[1];
      if (!channel || !user) {
        reject('Channel or User not exists');
      } else {
        const inputTags = data.tags;
        models.article.create(data).then(article => resolve(attachTags(article, inputTags)));
      }
    });
  });
  return newArticlePromise;
};
