var multer = require('multer');

export const fileUpload = async (option: any, req: any, res: any)=> {
    try {
        let upload = multer({}).single(option);
        let fileInfo = await new Promise(function(resolve, reject) {
            upload(req, res,(err: any) =>{
            if(err) reject(err);
            resolve(req.file)
            })
        });
        return fileInfo;  
    } catch (error) {
        if(error) throw error;
    }
}