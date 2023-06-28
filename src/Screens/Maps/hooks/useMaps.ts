import {useCarContext} from "../../../Contexts/CarContext/hook";
const UseMaps = () => {
    const {cars} = useCarContext()
    const [minLatitude, minLongitude] = cars?.
    reduce(([oldLatitude, oldLongitude], {location:[latitude, longitude]})=>
                [
                    oldLatitude<latitude?oldLatitude:latitude,
                    oldLongitude<longitude?oldLongitude:longitude
                ],
        [5000,5000]
    )
    const [maxLatitude, maxLongitude] = cars?.
    reduce(([oldLatitude, oldLongitude], {location:[latitude, longitude]})=>
                [
                    oldLatitude>latitude?oldLatitude:latitude,
                    oldLongitude>longitude?oldLongitude:longitude
                ],
        [0,0]
    )
    const latitudeDelta = maxLatitude-minLatitude
    const longitudeDelta = maxLongitude-minLongitude+0.1

    const [latitude, longitude] = cars?.

    reduce(([oldLatitude, oldLongitude], {location:[latitude, longitude]})=> [oldLatitude+latitude,oldLongitude+longitude], [0,0])?.
    map((element=>element/cars?.length))

    return {latitude, longitude, longitudeDelta, latitudeDelta}
};

export default UseMaps;