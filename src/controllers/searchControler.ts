import { Request, Response } from "express";
import { Pet } from '../models/pet';
import { createMenuObjects } from "../helpers/createMenuObject";

export const search = (req:Request, res:Response)=>{
    let query: string = req.query.q as string;


    // se nao digitar nada no search e apertar Enter, volta para a tela inicial:
    if(!query){
        res.redirect('/');
        return;
    }

    let list = Pet.getFromName(query);

    res.render('pages/page', {
        menu: createMenuObjects(''),
        list,
        query  // query: o que a pessoa digita 

    })
}
