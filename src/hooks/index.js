import {useState, useEffect} from 'react'
import  {firebase} from '../firebase'
import moment from 'moment'
import {collatedTasksExist} from '../helpers';


export const useTasks=(selectedProject)=>{
    const [tasks, setTasks]=useState([])

    useEffect(() => {
        let unsubscribe= firebase
            .firestore()
            .collection('tasks')
            .where('userId','==','2irjij20349cuu204')

            unsubscribe = selectedProject && !collatedTasksExist(selectedProject)? 
            (unsubscribe= unsubscribe.where('projectId', '==','selectedProject')):
            selectedProject==='TODAY' ? (unsubscribe= unsubscribe.where(
                'date','==', moment().format('DD/MM/YYYY')
            )): selectedProject ==='INBOX'|| selectedProject === 0 ?(unsubscribe=unsubscribe.where('date','==','')):unsubscribe
    }, [selectedProject])

}