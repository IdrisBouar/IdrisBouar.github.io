import { createStore } from 'vuex'
import { personalData } from '@/config/personalData'

export default createStore({
    state: {
        personalData: personalData
    },
    getters: {
        getPersonalData: state => state.personalData,
        getContact: state => state.personalData.contact,
        getSkills: state => state.personalData.skills,
        getProjects: state => state.personalData.projects,
        getTechLogos: state => state.personalData.techLogos
    }
})