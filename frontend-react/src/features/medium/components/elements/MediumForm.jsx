/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { createCrew, createMedium, fetchCrew, getCategories, searchCrew } from "../../api/data"
import DefaultPortrait from 'src/assets/portrait.jpg'
import Input from "src/features/auth/components/elements/Input"
import { Navigate } from "react-router-dom"

export const CrewCard = ({ id, onClick }) => {
    const [crew, setCrew] = useState(null)
    
    const getCrew = async (query) =>{
        const response = await fetchCrew(query)
        console.log('here2', response)
        setCrew(response)
    }

    useEffect(() => {
        getCrew(id)
    }, [id])

    return (
        <>
            {crew && (
                <button onClick={onClick} className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 bg-cover bg-center rounded-full" style={{backgroundImage: `url(${crew.image ? 'http://localhost/uploads/' + crew.image.path : DefaultPortrait})`}}></div>
                    <p className="text-white bg-black w-full px-1">{crew.name}</p>
                    <p className="text-white bg-black w-full px-1">{crew.function}</p>
                </button>

                // <div className="h-full flex items-center gap-3 flex-col">
                //     <button className="relative w-12 h-12 rounded-full border-2 border-dashed border-white bg-black text-white flex items-center justify-center bg-cover bg-center" style={{backgroundImage: `url(${crew && crew.image ? URL.createObjectURL(crew.image) : ''})`}}>
                //         +
                //         <input onChange={handleCrewImage} name="image" className="absolute opacity-0 h-full w-full top-0 left-0 border-2 border-black" type="file"/>
                //     </button>
                //     <div className="relative">
                //         <input onChange={handleCrewChange} className="text-white bg-black w-full px-1" type="text" name="name" />
                //         {searchResult && searchResult.length > 0 && (
                //             <div className="absolute z-20 top-0 translate-x-[5%] left-[100%] p-2 bg-gray-300 shadow-lg flex flex-col items-start w-full">
                //                 {searchResult.map((item, i) => (
                //                     <button onClick={() => addCrew(item.id)} key={i}>{item.name}</button>
                //                 ))}
                //             </div>
                //         )}
                //     </div>
                //     <input onChange={handleCrewChange} className="text-white bg-black w-full px-1" type="text" name="function" />
                // </div>
            )}
        </>
    )
}

export const ImageCard = ({ onClick, image }) => {

    return (
        <button onClick={onClick} className="w-16 h-16 border-2 border-white bg-white bg-cover bg-center" style={{backgroundImage: `url(${URL.createObjectURL(image)})`}}></button>
    )
}

const MediumForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        poster: '',
        background: '',
        genre: '',
        date: '',
        studio: '',
        category: '',
        visuals: [],
        misc: [],
        crew: []
    })
    const [redirect, setRedirect] = useState(false)
    const [categories, setCategories] = useState(null)
    const [crew, setCrew] = useState([])
    const [searchResult, setSearchResult] = useState(null)

    const fetchCategories = async () => {
        const response = await getCategories()
        setCategories(response)
    }

    const getCrew = async (query) =>{
        const response = await fetchCrew(query)
        setFormData({
            ...formData,
            crew: [
                ...crew,
                response.id
            ]
        })
    }

    const queryCrew = async (query) =>{
        try {
            const response = await searchCrew(query)
            let newCrew = response.filter((item) => !formData.crew.find((element) => element == item.id))
            setSearchResult(newCrew)
        } catch(error) {
            setSearchResult(null)
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    const redirectToPage = () => {
        if(redirect){
            console.log('herrrr');
            window.location.href = "http://localhost:3000/medium/" + redirect;
        }
    }

    useEffect(() => {
        redirectToPage()
    }, [redirect])

    const addVisual = (e) => {
        setFormData({
            ...formData,
            visuals: [
                ...formData.visuals,
                e.target.files[0]
            ]
        })
    }

    const handleImage = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.files[0]
        })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData)
    }

    const handleSubmit = async () => {
        const response = await createMedium(formData)
        console.log(response)
        setRedirect(response.id)
    }

    const handleCrewImage = (e) => {
        setCrew({
            ...crew,
            image: e.target.files[0]
        })
    }

    const handleCrewChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        if(name == 'name' && value.length > 0){
            queryCrew(value)
        } else {
            queryCrew(null)
        }

        setCrew({
            ...crew,
            [name]: value
        })
    }

    // const storeCrew = async () => {
    //     await
    // }

    const handleCrewSubmit = async () => {
        const response = await createCrew(crew)
        setFormData({
            ...formData,
            crew: [
                ...formData.crew,
                response
            ]
        })
    }

    const handleImageDelete = (id) => {
        setFormData({
            ...formData,
            visuals: formData.visuals.filter((visual, i) => i != id)
        })
    }

    const handleCrewDelete = (id) => {
        console.log(id)
        setFormData({
            ...formData,
            crew: formData.crew.filter((item, i) => i != id)
        })
    }

    const addCrew = async (id) => {
        const response = await fetchCrew(id)

        setFormData({
            ...formData,
            crew: [
                ...formData.crew,
                response.id
            ]
        })
        setSearchResult(null)

    }

    console.log(formData)
    // console.log(searchResult)


    return (
        <>
            <div className="grid grid-cols-8 w-[80%] gap-10 mx-auto">
                <button className="font-black bg-white text-6xl col-span-8 w-fit p-2 pl-28 ml-auto" onClick={handleSubmit}>SUBMIT</button>
                <div className="flex flex-col col-span-3 gap-8">
                    <div className="grid grid-cols-2 gap-8">
                            <div className={`relative z-10`}>
                                <div className={`flex w-full text-white bg-white py-8 px-4 items-start justify-center gap-2`}>
                                    <label className={`bg-black font-black p-4`} htmlFor="poster">POSTER</label>
                                    <div className="space-y-2 w-full h-16">
                                        <button className="relative w-full h-full border-2 border-dashed border-black text-black flex items-center justify-center bg-cover bg-center" style={{backgroundImage: `url(${formData.poster ? URL.createObjectURL(formData.poster) : ''})`}}>
                                            +
                                            <input onChange={handleImage} className="absolute opacity-0 h-full w-full top-0 left-0 border-2 border-white" type="file" name="poster"/>
                                        </button>
                                        <p className={`text-white text-end text-xs`}></p>
                                    </div>
                                </div>
                                <div className={`absolute top-0 left-0 h-full w-full translate-x-4 translate-y-4 bg-bronze z-[-1]`}></div>
                            </div>
                            <div className={`relative z-10`}>
                                <div className={`flex w-full text-black bg-black flex-row-reverse py-8 px-4 items-start justify-center gap-2`}>
                                    <label className={`bg-white font-black p-4`} htmlFor="background">BACKGROUND</label>
                                    <div className="space-y-2 w-full h-16">
                                        <button className="relative w-full h-full border-2 border-dashed border-white text-white flex items-center justify-center bg-cover bg-center" style={{backgroundImage: `url(${formData.background ? URL.createObjectURL(formData.background) : ''})`}}>
                                            +
                                            <input onChange={handleImage} className="absolute opacity-0 h-full w-full top-0 left-0 border-2 border-white" type="file" name="background"/>
                                        </button>
                                        <p className={`text-white text-end text-xs`}></p>
                                    </div>
                                </div>
                                <div className={`absolute top-0 left-0 h-full w-full translate-x-4 translate-y-4 bg-teal z-[-1]`}></div>
                            </div>
                        </div>
                    <Input onChange={handleChange} className="border-2 border-black" type="text" label="title" black={false} shadow={true} />
                    <Input onChange={handleChange} className="border-2 border-black" type="text" textarea='true' label="description" shadow={true} />
                </div>

                <div className="flex flex-col col-span-2 gap-8">
                    <Input onChange={handleChange} className="border-2 border-black" type="text" label="genre" black={false} shadow={true}/>
                    <Input onChange={handleChange} className="border-2 border-black" type="date" label="date" shadow={true}/>
                    <Input onChange={handleChange} className="border-2 border-black" type="text" label="studio" black={false} shadow={true}/>
                    <div className={`relative z-10`}>
                        <div className={`flex w-full text-black bg-black flex-row-reverse py-8 px-4 items-start justify-center gap-2`}>
                            <label className={`bg-white font-black p-4`} htmlFor="category">CATEGORY</label>
                            <div className="space-y-2 w-full">
                                <select onChange={handleChange} className="p-2 w-full" name="category">
                                    {categories ? categories.map((category, i) => (
                                        <option key={i} value={category.name}>{category.name}</option>
                                    )) : (
                                        <option value="">No date found</option>
                                    )}
                                </select>
                                <p className={`text-white text-end text-xs`}></p>
                            </div>
                        </div>
                        <div className={`absolute top-0 left-0 h-full w-full translate-x-4 translate-y-4 bg-bronze z-[-1]`}></div>
                    </div>
                </div>
                <div className="flex flex-col col-span-3 gap-8">
                    <div className={`relative z-10`}>
                        <div className={`flex w-full text-white bg-white py-8 px-4 items-start justify-center gap-2`}>
                            <label className={`bg-black font-black p-4`} htmlFor="poster">POSTER</label>
                            <div className="space-y-2 w-full h-full">
                                <div className="bg-black p-4 grid grid-cols-5 items-center gap-4">
                                    {formData.visuals.map((visual, i) => (
                                        <ImageCard key={i} onClick={() => handleImageDelete(i)} image={visual} />
                                    ))}
                                    <button className="relative w-16 h-16 border-2 border-dashed border-white flex items-center justify-center">
                                        +
                                        <input onChange={addVisual} className="absolute opacity-0 h-full w-full top-0 left-0 border-2 border-black" type="file"/>
                                    </button>
                                </div>
                                <p className={`text-white text-end text-xs`}></p>
                            </div>
                        </div>
                        <div className={`absolute top-0 left-0 h-full w-full translate-x-4 translate-y-4 bg-bronze z-[-1]`}></div>
                    </div>

                    <div className={`relative z-10`}>
                        <div className={`flex w-full text-black bg-black flex-row-reverse py-8 px-4 items-start justify-center gap-2`}>
                            <label className={`bg-white font-black p-4`} htmlFor="category">CREW</label>
                            <div className="space-y-2 w-full">
                                <div className="bg-white p-4 grid grid-cols-3 items-stqrt gap-4">
                                    {formData.crew.map((crew, i) => (
                                        <CrewCard key={i} id={crew} onClick={() => handleCrewDelete(i)} />
                                    ))}
                                    <div className="h-full flex items-center gap-3 flex-col">
                                        <button className="relative w-12 h-12 rounded-full border-2 border-dashed border-white bg-black text-white flex items-center justify-center bg-cover bg-center" style={{backgroundImage: `url(${crew && crew.image ? URL.createObjectURL(crew.image) : ''})`}}>
                                            +
                                            <input onChange={handleCrewImage} name="image" className="absolute opacity-0 h-full w-full top-0 left-0 border-2 border-black" type="file"/>
                                        </button>
                                        <div className="relative">
                                            <input onChange={handleCrewChange} className="text-white bg-black w-full px-1" type="text" name="name" />
                                            {searchResult && searchResult.length > 0 && (
                                                <div className="absolute z-20 top-0 translate-x-[5%] left-[100%] p-2 bg-gray-300 shadow-lg flex flex-col items-start w-full">
                                                    {searchResult.map((item, i) => (
                                                        <button onClick={() => addCrew(item.id)} key={i}>{item.name}</button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <input onChange={handleCrewChange} className="text-white bg-black w-full px-1" type="text" name="function" />
                                    </div>
                                    <button onClick={handleCrewSubmit} className="relative w-full h-full border-2 border-dashed border-black flex items-center justify-center">+</button>
                                </div>
                                <p className={`text-white text-end text-xs`}></p>
                            </div>
                        </div>
                        <div className={`absolute top-0 left-0 h-full w-full translate-x-4 translate-y-4 bg-bronze z-[-1]`}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MediumForm