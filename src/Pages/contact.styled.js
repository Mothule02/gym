import styled from "styled-components";



export const Con = styled.div`

h1{
    text-align: center;
    color: rgba(200, 0, 0, .6);
}

label{
    font-weight: 500;
    color: #2f4f43;
}
input{
    outline: none;
    background-color: transparent;
    border: 1px solid #06f;
    width: 200px;
    padding: 7px 6px;
    font-size: .95em;
    font-weight: 500;
    color: #06f;
    margin-bottom: 10px;
    transition-duration: 500ms;
}
input:focus{
    border: 1px solid rgba(200, 0, 0, .6);
    transition-duration: 500ms;
}
.form .inputs{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
    
}
.form{
    height: 100%;
   
}
option{
    font-weight: 500;
}
select{
    background-color: transparent;
    width: 240px;
    padding: 7px 6px;
    color: #06f;
    font-size: 0.95em;
    font-weight: 500;
    margin-bottom: 10px;
    outline: none;
}
textarea{
    resize: none;
    background-color: transparent;
    width: 240px;
    padding: 7px 6px;
    color: #06f;
    font-size: 0.95em;
    font-weight: 500;
    margin-bottom: 10px;
    outline: none;
}
.submit{
    display: flex;
    justify-content: center;
    margin: 5px 0px 50px 0px;
}
button{
    background-color: #06f;
    color: #fff;
    padding: 10px 10px;
    width: 200px;
    border: none;
    font-size: 0.95em;
    font-weight: 600;
}
`