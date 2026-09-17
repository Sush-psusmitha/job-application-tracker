import connectDB from './db'
import {Board,Column, JobApplication } from './models'   
import jobApplication from './models/job-application';

const DEFAULT_COLUMNS = [
    {
        name: "Wish List", 
        order: 0, 
    },
    {
        name: "Applied", 
        order: 1, 
    },
    {
        name: "Interviewing", 
        order: 2, 
    },
    {
        name: "Offer", 
        order: 3, 
    },
    {
        name: "Rejected", 
        order: 4, 
    },
]
export async function initializeUserBoard(userId:string){
   
    try{
        await connectDB(); 
        

        // checck if board already exists
        const existingBoard = await Board.findOne({userId, name: "job Hunt"}); 

        if(existingBoard) {
            return existingBoard; 
        }

        // create board with default columns 

        const board = await Board.create({
            name: "Job Hunt", 
            userId,
            columns:[]
        });


        // create default columns
        const columns = await Promise.all(
            DEFAULT_COLUMNS.map(async (col)=>{
                return await Column.create({
                    name: col.name, 
                    order: col.order,
                    boardId: board._id, 
                    jobApplication: [],
                });
            })
        );

        // update board with the new column IDs
        board.columns = columns.map((col)=> col._id);
        await board.save();

        return board;
        
        

    } catch(error){
        throw error;
    }
}