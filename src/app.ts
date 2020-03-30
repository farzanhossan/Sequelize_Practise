import express from 'express';
import { promises, resolve } from 'dns';
import bodyParser from 'body-parser';

import userRoutes from './routes/user';

import morgan from 'morgan';

class App{
    public app: express.Application;


    constructor(){
        this.app = express();
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.urlencoded({extended : false}));
        this.app.use(bodyParser.json());
        this.middleware();
        this.routes();
        this.errorHandeller();
    }

    public routes(): void{
        this.app.use('/api/v1/users', userRoutes);
    }

    public errorHandeller(): void{
        this.app.use((req, res, next) =>{
            const error = new Error('Not Found');
            error.stack = '404';
            next(error);
        });
        
        this.app.use((error: any, req: any, res: any, next: any) =>{
            res.status(500).json({
                message: error.message
            })
        })
    }
    public middleware(): void{
        this.app.use((req, res, next) =>{
            console.log('Checking Middleware')
            next()
        });
    }

    public start(port: any){
        return new Promise((resolve, rejects)=>{
            this.app.listen(port, ()=>{
                resolve(port)
            }).on('error', (err: object)=>{
                rejects(err)
            })
        })
    }

}
export default App;
