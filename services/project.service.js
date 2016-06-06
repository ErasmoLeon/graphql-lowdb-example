import models from '../models';

import { findById as findUserById, attachProject } from './user.service';

export const findById = (id, withChannels = false) => {
  const includes = withChannels ? { include: [{ model: models.channel }] } : null;
  return models.project.findById(id, includes);
};

export const findOne = where => models.project.findOne({ where });

export const store = data => {
  const role = 'admin';
  const newProjectPromise = new Promise((resolve, reject) => {
    findUserById(data.user_id).then(user => {
      if (!user) {
        reject('User or Project not exists');
      } else {
        models.project.create(data).then(project => {
          resolve(attachProject(user, project, role));
        });
      }
    });
  });
  return newProjectPromise;
};
