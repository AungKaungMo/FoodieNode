import { NextFunction, Request, Response } from "express";
import { CreateSellerInterface } from "../../dto";
import { Seller } from "../../models";
import { GenerateHashPassword } from "../../utilities/PasswordHash";

const GetAllSeller = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json("EHOI");
};

const CreateSeller = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const {
      name,
      address,
      pinCode,
      foodType,
      email,
      phone,
      password,
      ownerName,
    } = req.body;

    const existedSeller = await Seller.findOne({ email });

    if (existedSeller) {
      return res.status(400).json({
        message: "This seller is already created with that email.",
      });
    }

    const hashPassword = await GenerateHashPassword(password);

    const createSeller = await Seller.create({
      name,
      email,
      password: hashPassword,
      address,
      pinCode,
      foodType,
      phone,
      ownerName,
    });

    return res.status(201).json(createSeller);
  } catch (error) {
    next(error); // Pass any errors to the next middleware
  }
};

const GetSellerById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

const UpdateSellerById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const AdminController = {
  GetAllSeller,
  CreateSeller,
  GetSellerById,
  UpdateSellerById,
};
