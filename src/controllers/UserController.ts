import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

export default class UserController {
  async index(request: Request, response: Response) {
    const userRepository = getRepository(User);

    const users = await userRepository.find();

    return response.json({
      users,
      userID: request.userId
    });
  }

  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    const userRepository = getRepository(User);

    const userExists = await userRepository.findOne({
      where: {
        email
      }
    });

    if (userExists) {
      return response.sendStatus(409);
    }

    const user = userRepository.create({ email, password });

    await userRepository.save(user);
    
    return response.status(201).json(user);
  }
}