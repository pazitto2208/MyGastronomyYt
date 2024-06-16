import platesServices from "../../services/plates"
import { useEffect } from "react"
import Loading from "../loading/page"
import PlateCard from "../../components/plateCard/plateCard"

export default function Plates() {

    const { getAvailablePlates, platesList, platesLoading, refetchPlates } = platesServices()

    useEffect(() => {
        if(refetchPlates) {
            getAvailablePlates()
        }
    }, [refetchPlates])

    if(platesLoading) {
        return( <Loading /> )
    }

    console.log(platesList)

    return (
        <>
            <div>
                {platesList.map((plate) => (
                    <PlateCard plateData={plate} key={plate._id} />
                ))}
            </div>
        </>
    )
}