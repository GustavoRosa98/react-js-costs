import {useState, useEffect} from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm ({handleSubmit, btnText, projectData}) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})


    useEffect(() => {
        fetch("http://localhost:5000/categories", { //Request GET
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json()) //Pega a resposta do request e transforma em json
        .then((data) => { //Pega os dados, agora transformados em json
            setCategories(data) //E passa eles pra setCategories
        })
        .catch((err) => console.log(err))
     }, [])

     const submit = (e) => {
        e.preventDefault()
        // console.log(project)
        handleSubmit(project)
     }

     function handleChange (e) {
        //Esses "..." no project é uma maneira de 'espalhar' os atributos dele dentro do 'setProject'
        //Ou seja, esse 'setProject', pra cada atributo do project, vai atribuir o 'value' encontrado ao 'name' atrelado
        //Ali embaixo, ele foi chamado em cada handleOnChange dos Inputs do form, então ele vai pegar o valor de cada Input e
        //      relacionar ao name do Input
        setProject({...project, [e.target.name]: e.target.value })
     }

     function handleCategory(e){
        setProject({...project, 
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
     }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input 
            handleOnChange={handleChange} 
            type="text" 
            text="Nome do Projeto" 
            name="name" 
            placeholder="Insira o nome do projeto" 
            value={project.name ? project.name : ''}
            />

            <Input handleOnChange={handleChange} 
            type="number" 
            text="Orçamento do Projeto" 
            name="budget" 
            placeholder="Insira o orçamento do projeto" 
            value={project.budget ? project.budget : ''}
            />

            <Select 
            handleOnChange={handleCategory} 
            name="category_id" 
            text="Selecione a categoria" 
            options={categories} 
            value={project.category ? project.category.id : ''} />

            <SubmitButton text={btnText} />


        </form>
    )
}

export default ProjectForm