import styled from "styled-components";

export const Sev = styled.main`
 
h1{
    text-align: center;
    color: #f70;
}
i{
    -webkit-text-stroke-color: #06f;
    
    
}

.plans{
   
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 58px;
}
.head{
    font-size: 1.3em;
    font-weight: 500;
    color: #06f;
}
.price{
    font-size: 1.1em;
    font-weight: 500;
    color: #f70;
}
.basic, .pro, .premium{
    position: relative;
    margin: 10px;
    background-color: #000;
    padding: 10px;
    height: 260px;
    width: 250px;
}
ul{
    margin: 0px;
    padding-left: 18px;
}
li{
    color: #06f;
    font-weight: 500;
    margin-top: 10px;
}

.join{
    position: absolute;
    
    display: flex;
    right: 12px;
    top: 86%;
}
.a-j{
    font-size: 1.1em;
    font-weight: 500;
    color: #f70;
}
.inputs-p{
    background-color: #fff;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.inputs-p input{
   border: 1px solid #06f;
   
   width: 400px;
   font-size: 1em;
   font-weight: 600;
   padding: 7px 14px;
   margin-bottom: 10px;
   color: #06f;
}
.inputs-p input:focus{
    border-radius: 1px;
    transition-duration: 300ms;
    outline: 4px solid rgba(0, 0, 200, .2);
}
label{
    color: #f70;
    font-weight: 500;
}
button{
    width: 300px;
    background-color: #06f;
    color: #fff;
    font-size: 1.2em;
    font-weight: 5000;
    padding: 10px;
    margin-top: 15px;
}
@media screen and (max-width: 550px){
    .inputs-p input{
        display: flex;
        width: 90%;
    }
    
}

`