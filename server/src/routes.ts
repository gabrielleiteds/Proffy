import { Response, Request, Router, response } from 'express';

//database
import db from './database/connection';

//import functions Utils
import convertTime from './utils/convertHourToMinutes';

const routes = Router();

interface scheduleItem {
    week_day: number;
    from: string;
    to: string;
}

routes.post('/classes', async (req: Request, res: Response) => {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;

    const trx = await db.transaction()

    try {
        const getUserId = await trx('users').insert({ name, avatar, whatsapp, bio });

        const user_id = getUserId[0]

        const getClassId = await trx('classes').insert({ subject, cost, user_id })

        const class_id = getClassId[0]

        const classSchedule = schedule.map((scheduleItem: scheduleItem) => {
            return {
                class_id,
                week_day: scheduleItem.week_day,
                from: convertTime(scheduleItem.from),
                to: convertTime(scheduleItem.to)

            }
        })

        await trx('class_schedule').insert(classSchedule)

        await trx.commit();

        return res.status(201).send()
    }
    catch (err) {
        await trx.rollback();

        return res.status(400).json({
            error: 'Unexpected error while creating new class'
        })
    }
})

export default routes; 