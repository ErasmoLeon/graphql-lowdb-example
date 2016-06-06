import models from '../models';

import { findById as findProjectById } from './project.service';

export const findById = id => models.channel.findById(id);

export const findOne = where => models.channel.findOne({ where });

export const store = data => {
  const newProjectPromise = new Promise((resolve, reject) => {
    findProjectById(data.project_id).then(project => {
      if (!project) {
        reject('Project not exists');
      } else {
        models.channel.create(data).then(channel => {
          resolve(project.addChannel(channel));
        });
      }
    });
  });
  return newProjectPromise;
};
