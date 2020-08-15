import React, {useState} from 'react';
import PageHeader from '../../components/PageHeader';


import './styles.css'
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList(){

    const [subject, setSubject] = useState('');
    const [week_day, setWeeDay] = useState('');
    const [time, setTime] = useState('');

    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">

                

                <form id="search-teachers">
                <Select
                    name="subject" 
                    label="Matéria"
                    options={[
                        { value: 'Artes', label: 'Artes'},
                        { value: 'Matemática', label: 'Matemática'},
                        { value: 'Educação física', label: 'Educação física'},
                        { value: 'Programação', label: 'Programação'},
                        { value: 'Inglês', label: 'Inglês'},
                        { value: 'Geografia', label: 'Geografia'},
                        { value: 'História', label: 'História'},
                        { value: 'Química', label: 'Química'},
                    ]}
                    />

                    <Select 
                    name="week_day" 
                    label="Dia da semana"
                    options={[
                        { value: '0', label: 'Domingo'},
                        { value: '1', label: 'Segunda-feira'},
                        { value: '2', label: 'Terça-feira'},
                        { value: '3', label: 'Quarta-feira'},
                        { value: '4', label: 'Quinta-feira'},
                        { value: '5', label: 'Sexta-feira'},
                        { value: '6', label: 'Sábado'},
                    ]}
                    />

                    <Input name="time" label="Hora" type="time"/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>
        </div>
    )
}


export default TeacherList;