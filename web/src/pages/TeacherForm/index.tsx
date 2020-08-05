import React from 'react';

import warningIcon from '../../assets/images/icons/warning.svg';
//components
import PageHeader from '../../components/pageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import './styles.css';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas." description="O primeiro passo é preencher esse formulário de inscrição." />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Foto de perfil" />
                    <Input name="whatsapp" label="whatsapp" />
                    <Textarea name="bio" label="biografia" />
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select name="subject" label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Educação física', label: 'Educação física' },
                            { value: 'História', label: 'História' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Ciências', label: 'Ciências' }
                        ]}
                    />
                    <Input name="cost" label="Custo hora/aula" />
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">Salvar cadastro</button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;