import React, { useEffect, useState } from "react";
import styled from "./main.module.css";
import "../../App.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { GiNothingToSay } from "react-icons/gi";
import { MainContext, useContext } from "../../DataContext";

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [fetchData, setFetchData] = useState([]);
  const [audioData, setAudioData] = useState("");

  const dataFetch = async () => {
    const data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
    );
    const res = await data.json();
    setFetchData(res[0]);
  };

  const inputValueFunction = (e) => {
    setInputValue(e.target.value);
  };
  const PhoneticFunction = () => {
    return fetchData?.phonetics?.length === 0 ||
      fetchData?.phonetic?.length === 0
      ? "Not Found"
      : fetchData?.phonetics?.length > 0
        ? fetchData?.phonetics[1]?.text || fetchData?.phonetic
        : fetchData?.phonetics && fetchData?.phonetic;
  };

  useEffect(() => {
    let newData = fetchData?.phonetics?.filter(
      (item) => item?.audio?.length > 0
    )[0];
    setAudioData(newData?.audio);
  }, [fetchData]);

  let audio = new Audio(`${audioData}`);

  const { font, theme } = useContext(MainContext);

  return (
    <div className={styled.main}>
      <div className={`${styled.inputDiv}`}>
        <input
          className={styled.input}
          type="text"
          maxLength={32}
          onChange={inputValueFunction}
          placeholder="white?"
        />
        <div className={styled.icon}>
          <AiOutlineSearch
            size={24}
            fill="#169b89"
            cursor="pointer"
            onClick={() => dataFetch()}
          />
        </div>
      </div>

      <div className={styled.itemSection}>
        <div className={styled.itemAudioPhonetic}>
          <div className={styled.itemPhonetic}>
            <div className={styled.firstSpan}>
              {!fetchData ? (
                <span className={styled.nothingLogo}>
                  <GiNothingToSay fill="#1CF8DC" size={72} />
                </span>
              ) : fetchData?.word ? (
                <span style={{ fontFamily: font }}>{fetchData?.word}</span>
              ) : (
                fetchData?.word === undefined
              )}
            </div>
            <span className={styled.secondSpan}>
              <span className={theme === "Darken" ? "darkenFont" : "lightFont"}> <PhoneticFunction /> </span>
            </span>
          </div>

          {audioData !== undefined ? (
            <span className={styled.playIcon} style={{ background: theme === "Darken" ? "#1cf8db52" : "#ecebeb" }}>
              <BsFillPlayFill
                onClick={() => audio?.play()}
                cursor={"pointer"}
                size={28}
                fill={theme === "Darken" ? "#1CF8DC" : "#000"}
              />
            </span>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className={styled.meanings}>
        {fetchData?.meanings?.map((item, idx) => {
          return (
            <div key={idx}>
              <div className={styled.meaningsParts}>
                <div className={styled.nounBorder}>
                  <div className={styled.partOfSpeech}>
                    <div className={styled.parts}>
                      <h5>{item.partOfSpeech}</h5>
                    </div>
                    <div
                      className={
                        theme === "Darken" ? "LightenBorder" : "DarkenBorder"
                      }
                    ></div>
                  </div>

                  <span>
                    <h5>Meaning</h5>
                    <ul>
                      {item?.definitions?.map((item, idx) => (
                        <li className={styled.definition} key={idx}>
                          {item?.definition}
                        </li>
                      ))}
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
