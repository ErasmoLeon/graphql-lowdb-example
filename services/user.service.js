import models from '../models';

import { findById as findProjectById } from './project.service';

export const findaAll = () => models.user.findAll();

export const findById = id => models.user.findById(id, { include: [{ model: models.project }] });

export const findOne = where => models.user.findOne({ where });

export const store = data => {
  const userPromiseStore = new Promise((resolve, reject) => {
    findOne({ email: data.email }).then(user => {
      if (user) {
        reject('The user already exists');
      } else {
        resolve(models.user.create(data));
      }
    });
  });
  return userPromiseStore;
};

export const addProject = data => {
  const userPromiseStore = new Promise((resolve, reject) => {
    Promise.all([
      findById(data.user_id),
      findProjectById(data.project_id),
    ]).then(results => {
      const user = results[0];
      const project = results[1];
      if (!user || !project) {
        reject('User or Project not exists');
      } else {
        resolve(user.addProject(project, { role: data.role }));
      }
    });
  });
  return userPromiseStore;
};