import models from '../models';

import { findById as findChannelById } from './../services/channel.service';

import { findById as findUserById } from './../services/user.service';

export const findById = id => models.project.findById(id);

export const findOne = where => models.project.findOne({ where });

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

        //TODO check this
        /**
         Product.create({
          id: 1,
          title: 'Chair',
          Tags: [
            { name: 'Alpha'},
            { name: 'Beta'}
          ]
        }, {
          include: [ Tag ]
        })
         **/

        resolve(models.article.create(data));
      }
    });
  });
  return newArticlePromise;
};
