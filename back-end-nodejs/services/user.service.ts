
import { Request, Response } from 'express';
import { models } from '../db/db';



const { UserDoc } = models;

//get all user
export async function getAllUsers(request: Request, response: Response): Promise<Response> {

  try {
    const data = await UserDoc.find();
    console.log(data)
    return response.status(200).send(data);
  } catch (error) {
    console.log(Error)
    return response.status(500).send({ message: "Technical Error" });
  }
}

//Save new user
export async function saveUserData(request: Request, response: Response): Promise<Response> {
  console.log(request.body)
  try {
    const data = new UserDoc(request.body);
    await data.save();
    return response.status(200).send({ data });
  } catch (error) {
    console.log(error)
    return response.status(500).send({ message: "Technical Error" });
  }
}

//get user by id
export async function findById(request: Request, response: Response): Promise<Response> {

  try {
    const data = await UserDoc.findById(request.params.id);
    return response.status(200).send(data );
  } catch (error) {
    console.log(Error)
    return response.status(500).send({ message: "Technical Error" });
  }

}

//delete user
export async function deleteUserById(request: Request, response: Response): Promise<Response> {

  try {
    console.log(request.params.id)
    const data = await UserDoc.remove({ _id: request.params.id });
    console.log(data)
    return response.status(200).send({ data: "Deleted Successfully" });
  } catch (error) {
    console.log(Error)
    return response.status(500).send({ message: "Technical Error" });
  }
}

export async function updateUser(request: Request, response: Response): Promise<Response> {

  try {
    console.log(request.body)
    const data = await UserDoc.findOneAndUpdate({ _id: request.params.id },
      request.body, { new: true });
    console.log(data)
    return response.status(200).send({ data: "Successfully Updated" });
  } catch (error) {
    console.log(Error)
    return response.status(500).send({ message: "Technical Error" });
  }

}
