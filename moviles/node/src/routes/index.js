import {router} from 'express';
const router= router();


//rutas
router.get('/',(req,res)=> res.send('home', {title: 'home'}));
router.get('/login',(req,res)=> res.send('login', {title: 'login'}));
router.get('/registro',(req,res)=> res.send('registro', {title: 'registro'}));

export default router;