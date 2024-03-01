import {Router} from 'express';
const router=Router();
import {home} from '../controllers/controllers.js'
router.get("/",home);

router.get('/connect',async (req,res) => {
    const [result]=await pool.query('SELECT 1+1 AS RESULT')
    res.json(result[0])
    });
    

        export default router;