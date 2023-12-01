import axios from 'axios'


export default axios.create({
    baseURL:"https://demo.omfysgroup.com/qpotapp/",
    PMbaseURL:"https://demo.omfysgroup.com/project-managementQpotAPi/qpot/"
});