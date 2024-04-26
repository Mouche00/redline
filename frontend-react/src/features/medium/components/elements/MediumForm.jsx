/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { fetchCrew, getCategories, getCrew } from "../../api/data"
import DefaultPortrait from 'src/assets/portrait.jpg'

const CrewCard = ({ id, onClick }) => {
    const [crew, setCrew] = useState(null)

    const getCrew = async (query) =>{
        const response = await fetchCrew(query)
        setCrew(response)
    }

    useEffect(() => {
        getCrew(id)
    }, [])

    return (
        <>
            {crew && (
                <button onClick={onClick} className="flex flex-col items-center gap-4">
                    <div className="w-8 h-8 bg-cover bg-center" style={{backgroundImage: `url(${crew.image ? crew.image.path : DefaultPortrait})`}}></div>
                    <p>{crew.name}</p>
                    <p>{crew.function}</p>
                </button>
            )}
        </>
    )
}

const ImageCard = ({ onClick, image }) => {

    return (
        <button onClick={onClick} className="w-16 h-16 bg-cover bg-center" style={{backgroundImage: `url(${URL.createObjectURL(image)})`}}></button>
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
    const [categories, setCategories] = useState(null)
    const [crew, setCrew] = useState([])
    const [searchResult, setSearchResult] = useState('')

    const fetchCategories = async () => {
        const response = await getCategories()
        setCategories(response)
    }

    const searchCrew = async (query) =>{
        const response = await getCrew(query)
        setSearchResult(response)
    }

    useEffect(() => {
        fetchCategories()
    }, [])

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

    const handleSubmit = (e) => {
        e.preventDefault()
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
        if(name == 'name' && value){
            searchCrew(value)
        } else {
            searchCrew('')
        }

        setCrew({
            ...crew,
            [name]: value
        })
        
    }

    const handleCrewSubmit = () => {
        
    }

    const handleImageDelete = (id) => {
        setFormData({
            ...formData,
            visuals: formData.visuals.filter((visual, i) => i != id)
        })
    }

    const handleCrewDelete = (id) => {
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

    // console.log(formData)
    console.log(crew)


    return (
        <div>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col w-[50%] gap-4 mx-auto">
                <input onChange={handleChange} className="border-2 border-black" type="text" name="title"/>
                <input onChange={handleChange} className="border-2 border-black" type="text" name="description"/>
                <input onChange={handleImage} className="border-2 border-black" type="file" name="poster"/>
                <input onChange={handleImage} className="border-2 border-black" type="file" name="background"/>
                <input onChange={handleChange} className="border-2 border-black" type="text" name="genre"/>
                <input onChange={handleChange} className="border-2 border-black" type="date" name="date"/>
                <input onChange={handleChange} className="border-2 border-black" type="text" name="studio"/>
                <select onChange={handleChange} name="category">
                    {categories ? categories.map((category, i) => (
                        <option key={i} value={category.name}>{category.name}</option>
                    )) : (
                        <option value="">No date found</option>
                    )}
                </select>
                <div className="border-2 border-black p-4 flex items-center gap-4">
                    {formData.visuals.map((visual, i) => (
                        <ImageCard key={i} onClick={() => handleImageDelete(i)} image={visual} />
                    ))}
                    <button className="relative w-16 h-16 border-2 border-dashed border-black flex items-center justify-center">
                        +
                        <input onChange={addVisual} className="absolute opacity-0 h-full w-full top-0 left-0 border-2 border-black" type="file"/>
                    </button>
                </div>

                <div className="border-2 border-black p-4 flex items-center gap-4">
                    {formData.crew.map((crew, i) => (
                        <CrewCard key={i} id={crew} onClick={handleCrewDelete} />
                    ))}
                    <div className="border-2 border-black p-4 flex items-center gap-4 flex flex-col">
                        <button className="relative w-8 h-8 rounded-full border-2 border-dashed border-black flex items-center justify-center" style={{backgroundImage: `url(${URL.createObjectURL(crew.image) ?? ''})`}}>
                            +
                            <input onChange={handleCrewImage} name="image" className="absolute opacity-0 h-full w-full top-0 left-0 border-2 border-black" type="file"/>
                        </button>
                        <div className="relative">
                            <input onChange={handleCrewChange} className="border-2 border-black" type="text" name="name" />
                            {searchResult && (
                                <div className="absolute top-0 translate-x-[5%] left-[100%] p-2 bg-gray-300 shadow-lg flex flex-col items-start w-full">
                                    {searchResult.map((item, i) => (
                                        <button onClick={() => addCrew(item.id)} key={i}>{item.name}</button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <input onChange={handleCrewChange} className="border-2 border-black" type="text" name="function" />
                        <button onClick={handleCrewSubmit} className="relative w-16 h-16 border-2 border-dashed border-black flex items-center justify-center">+</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MediumForm