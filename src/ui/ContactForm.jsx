import React from "react";
import styled from "styled-components";
import FormRow from "./FormRow.jsx";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import breakpoints from "../styles/breakpoints.jsx";
import {
    borderEffectAnimation,
    glowingEffect,
    colorEffectAnimation,
    boxShadowEffectAnimation, colorEffectAnimationForHeading
} from "../styles/animations.js";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {createContactUser} from "../features/contact/apiContact.js";
import {GrContact} from "react-icons/gr";
import {BsSendArrowDown} from "react-icons/bs";
import log from "eslint-plugin-react/lib/util/log.js";
import FileInput from "./FileInput.jsx";


const Form = styled.form`
  
  color: #f6f6f6;
  width: 100%;
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  
  //background-color: #0e0d0d;
  background-color: #001220;
  padding: 100px 0 ;

  
    
    /* Desktop styles */ ${breakpoints.desktop`
    padding: 40px;
    background-color: #001220;
  `}

`

const LeftContainer = styled.div`

  background-color: #001220;
  display: grid;
  align-items: center;

  & > :last-child {
    margin-top: 40px;
    justify-self: center;
  }

`

const FormContainer = styled.div`

  width: 70%;
  margin: 0 auto;
  background-color: #001220;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  padding: 40px 60px;
`

const RightContainer = styled.div`
  align-self: center;
  position: relative;
  background-color: #001220;

`

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`

const SVG = styled.svg`
  width: 100%;
  height: auto;
  background: navy;
  opacity: 0.5;
  animation: ${borderEffectAnimation};

`

const H1 = styled.h1`

  //max-width: 40px;
  font-size: 40px;
  position: absolute;
  top: 30%; /* Adjust this to position above the SVG */
  left: 50%;
  transform: translateX(-50%); /* Centers horizontally */
  text-align: center;
  color: white;
  z-index: 2;
  animation: ${glowingEffect};
  
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: 5px;
  background-clip: padding-box;
  //animation: ${colorEffectAnimation} 2s infinite linear;

`
const H2 = styled.h2`

  //max-width: 40px;
  font-size: 40px;
  text-align: center;
  color: white;
  z-index: 1;
  
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: 5px;
  background-clip: padding-box;
  animation: ${colorEffectAnimationForHeading} 2s infinite linear;

`


const ContactForm = () => {

    const {register, handleSubmit, reset,getValues,formState} = useForm()
    const {errors}=formState

    // console.log("Form Errors ",errors)
    // console.log("Form State ",formState)

    const {isLoading, mutate} = useMutation({
        mutationFn: createContactUser,
        onSuccess: () => {
            // console.log("Sucess Form Craete")
            reset()
        }
    })

    const onSubmit = (data) => {
        console.log("FORM SUBMIT DATA ", data)

        if (!data) {
            throw new Error("Please Fill the Form ")
        }

        //TODO Form Is Working and Saved in Supabase
        mutate(data )
    }

    function onError(error) {

        console.log("ERROR REQUIRED ", error)
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    return (

        <Form onSubmit={handleSubmit(onSubmit, onError)} id={"contact"}>
            <H2>Get in Touch <GrContact />  </H2>
            <FormContainer>
                <LeftContainer>
                    <FormRow  error={errors?.first_name}>
                        <Input
                            type={"text"}
                            placeholder={"First Name"} id={"firstname"}
                               {...register("first_name", {
                                   required: "First name  Field is Required",
                                   validate:(value)=>{
                                      // TODO Should return boolean
                                      return  isNaN(value) || "First Name must not be a number"
                                   },
                                   minLength: {
                                       value: 4,
                                       message: "First Name must have at least 4 characters",
                                   }}
                               )}
                        />
                    </FormRow>
                    <FormRow error={errors?.last_name}>
                        <Input
                            type={"text"}
                            placeholder={"Last  Name"}
                               id={"lastname"}  {...register("last_name", {required: "Last Name Field is Required"})}/>
                    </FormRow>
                    <FormRow error={errors?.email}>
                        <Input
                            type={"text"}
                            placeholder={"Email "}
                               id={"email"}  {...register("email",
                            {
                                required: "Email is Required",
                                validate:(email)=>{

                                    if(!email){
                                        return "Email Field CAnnot Empty"
                                    }
                                    return emailRegex.test(email) || "Invalid email address format.";
                                }
                            })}/>
                    </FormRow>
                    <Button type={"submit"} position={"center"}>
                        Share Your Feedback < BsSendArrowDown size={25} />
                    </Button>

                </LeftContainer>
                <RightContainer>
                    <H1>Contact <p>Me</p> </H1>
                    <SVG id="visual" viewBox="0 0 960 540" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                        <rect x="0" y="0" width="960" height="540" fill="#001220"></rect>
                        <g transform="translate(486.07994517438544 277.84591347805264)">
                            <path
                                d="M67.7 -121.5C92.1 -103.2 119.2 -93.9 137.9 -75.1C156.6 -56.3 166.8 -28.2 167.9 0.7C169.1 29.5 161.2 59 142.2 77.3C123.3 95.5 93.3 102.6 67.7 115.2C42.2 127.7 21.1 145.9 -3.4 151.7C-27.8 157.5 -55.7 151.1 -75 134.9C-94.3 118.8 -105.2 92.9 -122.9 68.8C-140.7 44.7 -165.3 22.3 -175.2 -5.7C-185.1 -33.7 -180.2 -67.5 -160.8 -88.7C-141.4 -109.9 -107.5 -118.6 -78.2 -134.1C-49 -149.5 -24.5 -171.8 -1.4 -169.3C21.7 -166.9 43.3 -139.7 67.7 -121.5"
                                fill="none" stroke="#b0919d" strokeWidth="6"></path>
                        </g>
                    </SVG>


                    {/*<ImageContainer>*/}
                    {/*    <Image*/}
                    {/*        src={"https://images.unsplash.com/photo-1735287367310-2648443f086f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}*/}
                    {/*        alt=""/>*/}
                    {/*</ImageContainer>*/}
                </RightContainer>
            </FormContainer>


        </Form>
    )
}

export default ContactForm