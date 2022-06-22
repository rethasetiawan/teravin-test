
import React, {useState, useEffect} from 'react';
import {
    Background,
    FormBackground,
    Button,
    SectionBackground,
    InputContainer,
    ButtonContainer
  } from './MainStyle';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';


const FormSubmission = ({props}) =>
{
    let navigate = useNavigate();

    window.onunload = function () {
        localStorage.removeItem('name');
        localStorage.removeItem('birthdate');
        localStorage.removeItem('gender');
        localStorage.removeItem('address');
        localStorage.removeItem('session');
    }

    const [name, setName] = useState('');
    const [checkName, setCheckName] = useState(false);
    const [birthdate, setBirthdate] = useState('');
    const [checkBirthdate, setCheckBirthdate] = useState(false);
    const [gender, setGender] = useState('');
    const [checkGender, setCheckGender] = useState(false);
    const [address, setAddress] = useState('');
    const [checkAddress, setCheckAddress] = useState(false);
    const [data, setData] = useState([]);
    const [viewPersonal, setViewPersonal] = useState(true);

    
    const Nextbtn =()=>{
  
        const datas = [{ name, birthdate, gender, address }];
        data.push(datas);
        setData(data)
        console.log('data',data)
        localStorage.setItem("session", data);
        //  masih error
        if ((name.length < 2)){
            setCheckName(true)
        } else{
            setCheckName(false)
        }
        if ((birthdate.length < 2)){
            setCheckBirthdate(true)
        } else{
            setCheckBirthdate(false)
        }
        if ((gender.length < 2)){
            setCheckGender(true)
        } else{
            setCheckGender(false)
        }
        if ((address.length < 2)){
            setCheckAddress(true)
        } else{
            setCheckAddress(false)
        }

        console.log('res')

        if (!checkName && !checkAddress &&!checkBirthdate&& !checkGender){
            navigate("/")
        }

    }
        
    return(
        <Background>
        <FormBackground>
           Form submission

            <SectionBackground>
            {viewPersonal ?
            <>
                    <div>
                        <InputContainer>
                            Nama Lengkap
                            <TextField
                                error={checkName}
                                inputProps={{style: {fontSize: 14}}} 
                                sx={{ 
                                "& .MuiOutlinedInput-root": {background: 'white',height:30},
                                }}
                                variant="outlined"
                                onChange={((event) => setName(event.target.value))} 
                                helperText={checkName? "Incorrect entry.": null}
                            />
                        </InputContainer>

                        <InputContainer>
                        Tempat / Tanggal Lahir
                            <TextField
                                error={checkBirthdate}
                                inputProps={{style: {fontSize: 14}}} 
                                sx={{ 
                                "& .MuiOutlinedInput-root": {background: 'white',height:30},
                                }}
                                variant="outlined"
                                onChange={((event) => setBirthdate(event.target.value))} 
                                helperText={checkBirthdate? "Incorrect entry.": null}
                            />
                        </InputContainer>

                        <InputContainer>
                        Jenis Kelamin
                            <TextField
                                error={checkGender}
                                inputProps={{style: {fontSize: 14}}} 
                                sx={{ 
                                "& .MuiOutlinedInput-root": {background: 'white',height:30},
                                }}
                                variant="outlined"
                                onChange={((event) => setGender(event.target.value))} 
                                helperText={checkGender? "Incorrect entry.": null}
                            />
                        </InputContainer>

                        <InputContainer>
                            Alamat
                            <TextField
                                error={checkAddress}
                                inputProps={{style: {fontSize: 14}}} 
                                sx={{ 
                                "& .MuiOutlinedInput-root": {background: 'white',height:30},
                                }}
                                variant="outlined"
                                onChange={((event) => setAddress(event.target.value))} 
                                helperText={checkAddress ? "Incorrect entry.": null}
                            />
                        </InputContainer>

                    </div>
                
                    <div>
                    <InputContainer>
                            Nomor HP
                            <TextField
                                inputProps={{style: {fontSize: 14}}} 
                                sx={{ 
                                "& .MuiOutlinedInput-root": {background: 'white',height:30},
                                }}
                                variant="outlined"
                            />
                        </InputContainer>

                        <InputContainer>
                            Email
                            <TextField
                                inputProps={{style: {fontSize: 14}}} 
                                sx={{ 
                                "& .MuiOutlinedInput-root": {background: 'white',height:30},
                                }}
                                variant="outlined"
                            />
                        </InputContainer>

                        <InputContainer>
                            Kewarganegaraan
                            <TextField
                                inputProps={{style: {fontSize: 14}}} 
                                sx={{ 
                                "& .MuiOutlinedInput-root": {background: 'white',height:30},
                                }}
                                variant="outlined"
                            />
                        </InputContainer>
                        <InputContainer>
                            Agama
                            <TextField
                                inputProps={{style: {fontSize: 14}}} 
                                sx={{ 
                                "& .MuiOutlinedInput-root": {background: 'white',height:30},
                                }}
                                variant="outlined"
                            />
                        </InputContainer>
                    </div>
            </>
            :null
            }


            </SectionBackground>
           
            <ButtonContainer>
                <Button onClick={()=>Nextbtn()}>Submit</Button>  
            </ButtonContainer>
                            
        </FormBackground>
        </Background>
    ) 
}
export default (FormSubmission);
