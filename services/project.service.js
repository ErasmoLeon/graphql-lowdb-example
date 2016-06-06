import models from '../models';

export const findById = id => models.project.findById(id);

export const findOne = where => models.project.findOne({ where });

export const store = data => models.project.create(data);
