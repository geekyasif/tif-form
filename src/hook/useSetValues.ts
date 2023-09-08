import { useData } from '@src/containers/home/DataProvider'

function useSetValues() {
    const contextValue = useData()

    function handleRequisitionDetailsValue(values: any) {
        contextValue?.setState((prevState) => ({
            ...prevState,
            requisitionDetails: {
                ...prevState.requisitionDetails,
                requisitionTitle: values.requisitionTitle,
                noOfOpenings: values.noOfOpenings,
                gender: values.gender,
                urgency: values.urgency,
            },
        }))
    }

    function handleJobDetailsValue(values: any) {
        contextValue?.setState((prevState) => ({
            ...prevState,
            jobDetails: {
                ...prevState.jobDetails,
                jobTitle: values.jobTitle,
                jobDetails: values.jobDetails,
                jobLocation: values.jobLocation,
            },
        }))
    }

    function handleInterviewSettingsValue(values: any) {
        contextValue?.setState((prevState) => ({
            ...prevState,
            interviewSettings: {
                ...prevState.interviewSettings,
                interviewMode: values.interviewMode,
                interviewDuration: values.interviewDuration,
                interviewLanguage: values.interviewLanguage,
            },
        }))

    }

    return { handleRequisitionDetailsValue, handleJobDetailsValue, handleInterviewSettingsValue }
}

export default useSetValues