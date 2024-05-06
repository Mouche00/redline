import { fetchMediumsService, fetchNewService, fetchPopularService, fetchUpcomingService } from "./service"

export const fetchMediums = async (type = 'new') => {

    try {
        let response
        switch (type) {
            case 'new':
                response = await fetchNewService()
                break;
            case 'upcoming':
                response = await fetchUpcomingService()
                break;
            case 'popular':
                response = await fetchPopularService()
                break;

        }
        return response.data.data
    } catch (error) {
        console.log('Error', error)
        throw error
    }
}