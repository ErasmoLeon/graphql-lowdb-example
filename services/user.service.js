import models from '../models';

import { findById as findProjectById } from './project.service';

import bcrypt from 'bcrypt';

const saltRounds = 10;

export const findaAll = () => models.user.findAll();

export const findById = (id, withProjects = false) => {
  const includes = withProjects ? { include: [{ model: models.project }] } : null;
  return models.user.findById(id, includes);
};

export const findOne = where => models.user.findOne({ where });

export const store = data => {
  const userPromiseStore = new Promise((resolve, reject) => {
    findOne({ email: data.email }).then(user => {
      if (user) {
        reject('The user already exists');
      } else {
        bcrypt.hash(data.password, saltRounds, (err, hash) => {
          resolve(models.user.create({ ...data, ... { password: hash } }));
        });
      }
    });
  });
  return userPromiseStore;
};

export const attachProject = (user, project, role) => user.addProject(project, { role });

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
        resolve(attachProject(user, project, data.role));
      }
    });
  });
  return userPromiseStore;
};
