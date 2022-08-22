import styled from "styled-components";

export const Hme = styled.main`

.intro{
    background-color: rgb(0, 62, 87);
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
    padding-top: 45px;
    flex-wrap: wrap;
    
}
.stroke{
    margin-top: 0;
    padding: 5px 10px;
    background-color: #000;
    text-align: center;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #06f;
}
h1{
    color: #f70;
    
}
h5{
    color: #05c;
}
.text{
    width: 450px;
    color: aliceblue;
    margin: 10px;
}
.text h5{
    color: #f70;
    font-size: 1em;
    font-weight: 500;
}
.cont, .acti{
    margin: 10px 15px;
}

.text .intro-btns .cont{
    text-decoration: none;
    color: azure;
    width: 160px;
    padding: 10px 14px;
    background-color: #f90;
    font-weight: 600;
    font-size: 0.95em;
    border-radius: 50px;
    

}
.text .intro-btns .acti{
    text-decoration: none;
    color: #f90;
    width: 160px;
    padding: 8px 14px;
    border: 2px solid #f90;
    font-weight: 600;
    font-size: 0.95em;
    border-radius: 50px;
    

}
.intro img{
  
   filter: brightness(80%);
   width: auto;
   height: 300px;
   border-radius: 5px;
   margin: 10px;
   border: 2px solid grey;
}
.programmes div:hover{
    
    background: #f12711; 
    background: -webkit-linear-gradient(to right, #f5af19, #f12711); 
    background: linear-gradient(to right, #f5af19, #f12711);
}
.programmes{
    margin-top: 25px;
    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.programmes div{
    margin-bottom: 15px;
    width: 250px;
    background-color: rgba(10, 10, 10);
    padding: 10px;
    color: #fff;
}
.programmes div h2{
    color: #06f;

}
.content{
    
    display: flex;
    padding: 10px;
    justify-content: center;
    flex-wrap: wrap;

}

.content .desc{
    width: 400px;
    background-color: #000;
    padding: 10px;
    height: max-content;
    border-radius: 5px;
}
.content .desc h5{
    margin: 0;
}
.content img{
    width: 400px;
    height: auto;
    margin: 10px;
    filter: brightness(80%);
    border: 2px solid grey;
    border-radius: 5px;
}
.link-content{
    color: #05c;
    
}
.images{
    
    
    display: flex;

    justify-content: center;
    flex-wrap: wrap;
    
}
.group2, .subg1{
   display: flex;
   flex-direction: column;
   
}
.group2 img, .subg1 img{
   margin: 5px;
   filter: brightness(90%);
    
}
.images img{
    width: 200px;
}
.img1{
    grid-area: left;
}
.img2{
    grid-area: bottom;
}
.img3{
    grid-area: topleft;
}
.img4{
    grid-area: topright;
}
.b-hrs{
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   
   
}


th, td{
    padding: 2px 15px;
    border: 2px solid #06f;
    color: #f70;
    font-weight: 500;
}
table{
    margin: 10px;
}

iframe{
    border: 2px solid grey;
    height: 300px;
    margin: 10px;
    
}
li{
    color: #06f;
    font-weight: 500;
    padding: 8px 5px;
}
@media screen and (max-width: 650px) {
    
    .intro img{
        height: auto;
        width: 90%;
    }
    iframe{
        height: 300px;
        width: 100%;
    }
}
`