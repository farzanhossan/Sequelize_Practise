import sequelize from "../database/connection";

export const createSP = async (name: any, param: any, query: any)=> {
    try {
        const sql = `CREATE PROCEDURE ${name} (IN ${param} integer)
        BEGIN
        ${query}
        END`
        const exe = await sequelize.query(sql);
        console.log(exe);
    } catch (error) {
        if(error) throw error;
    }
}

export const getSP = async (spFunction: any)=> {
    try {
        return await sequelize.query(`CALL ${spFunction}`)
    } catch (error) {
        if(error) throw error;
    }
}