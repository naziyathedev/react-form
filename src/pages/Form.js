import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import qs from "qs";
import "./CSS/todo.css";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import Field from "../Components/Field"

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [language, setLanguage] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [interests, setInterests] = useState([]);
  let interestBox = useRef()

  const firsthandler = (event) => {
    setFirstName(event.target.value);
  };
  const lasthandler = (event) => {
    setLastName(event.target.value);
  };
  const emailhandler = (event) => {
    setEmail(event.target.value);
  };
  const genderMalehandler = (event) => {
    setGender(event.target.value);
  }
  const genderFemalehandler = (event) => {
    setGender(event.target.value);
  }
  const languagehandler = e =>{
    setLanguage(e.target.value)
  }

  const searchHandler = (event) => {
    setSearch(event.target.value)
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let interestString = "";
    interests.forEach((i) => (interestString = interestString + i + ","));
    const resp = await axios.post(
      "https://testpostapi1.p.rapidapi.com/testBatmanApi/name/register",
      qs.stringify({
        name: firstName.trim() + " " + lastName.trim(),
        email: email,
        interests: interestString,
      }),
      {
        headers: {
          accept: "success",
          "content-type": "application/x-www-form-urlencoded",
          "x-rapidapi-host": "testpostapi1.p.rapidapi.com",
          "x-rapidapi-key":
            "28728db04dmsh34d3f140dd059fap1c388ejsn7288577afcf7",
        },
      }
    ).then(data=>{
      console.log(data)
    })

  };

  const renderSuggestions = () => {
    return suggestions.map((s) => (
      <div key={s}>
        <p
          type="button"
          onClick={() => {
            setInterests((prevInterests) => {
              if (prevInterests.includes(s)) {
                return prevInterests;
              }
              return [s, ...prevInterests].slice(0, 3);
            });
          }}
        >
          {s}
        </p>
      </div>
    ));
  };

  const renderInterests = () => {
    return interests.map((i) => (
      <div className="row m-2" key={i}>
        <button style={{borderRadius:"15px"}} className="btn btn-secondary btn-sm"
          type="button"
          onClick={() => {
            setInterests((prevInterests) =>
              prevInterests.filter((prevI) => prevI !== i)
            );
          }}
        >
          {i + " "}<FaTimes />
        </button>
      </div>
    ));
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await axios.get(
          "https://webit-keyword-search.p.rapidapi.com/autosuggest",
          {
            params: {
              q: search,
              language: "en",
            },
            headers: {
              "x-rapidapi-host": "webit-keyword-search.p.rapidapi.com",
              "x-rapidapi-key":
                "28728db04dmsh34d3f140dd059fap1c388ejsn7288577afcf7",
            },
          }
        );
        setSuggestions(resp.data?.data?.results || []);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [search]);
  return(
<div>
  <div className="container">
  <h2 className="mb-3 mt-4 text-center">Complete the form below to registry</h2>
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="form">
          <Field 
            details={{type:"text",value:firstName,id:"firstname", label:"Fist name",event:firsthandler
            }}
          />
          <Field 
            details={{type:"text",value:lastName,id:"lastname",label:"Last name",event:lasthandler
            }}
          />
          <Field 
            details={{type:"email",value:email,id:"email",label:"E-mail",event:emailhandler
            }}
          />
          <div className="form-group">
            <span className="mb-1">Gender</span>
            <div className="form-check">
              <input onChange={genderMalehandler} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="male"/>
              <label className="form-check-label" htmlFor="exampleRadios1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input onChange={genderFemalehandler} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="female"/>
              <label className="form-check-label" htmlFor="exampleRadios2">
                Female
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="interest">Interest</label>
            <input  value={search} onChange={searchHandler} type="text" placeholder="Interest" className="form-control" id="interest"/>
            <br/>
            <div  className="row round shadow-sm">
              <div className="col-12">
              {renderSuggestions()}
              </div>
            
            </div>
            <div ref={interestBox} className="row mt-2 round shadow-sm">
              {renderInterests()}
            </div>
            
            
          </div>

          <div className="form-group">
            <label htmlFor="language">Language</label>
            <select onChange={languagehandler} id="language" defaultValue="default" className="form-control">
              <option value="default" disabled>Choose your language</option>
              <option value="English(US)" disabled>English(US)</option>
              <option value="English(UK)" disabled>English(UK)</option>
              <option value="French" disabled>French</option>
            </select>
          </div>
          <div  className="form-group mb-5">
            <button onClick={handleSubmit} className="btn btn-primary"> Submit <FaCheckCircle /></button>
          </div>
          <div className="foo text-muted text-center">
            <p>Built by <strong>VillageGirl</strong> @{new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Form;