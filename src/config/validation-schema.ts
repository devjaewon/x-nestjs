import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NAVER_USER: Joi.string().required(),
  NAVER_PASSWORD: Joi.string().required(),
});
