import React , {useEffect , useState}from "react";
import { StyleSheet, Text , View , Dimensions , TouchableWithoutFeedback , Image } from "react-native"
import Bird from "./src/components/Bird";
import Obstacles from "./src/components/Obstacle";
import { use } from "react";


export default function App(){
  const screenWidth = Dimensions.get('screen').width
  const screenHeight = Dimensions.get("screen").height
  const birdLeft = screenWidth/2
  const [birdBottom , setBirdBottom ]= useState(screenHeight /2)
  const [obstacleLeft , setObstacleLeft]= useState(screenWidth)
  const [obstacleLeftTwo , setObstacleLeftTwo]= useState(screenWidth + screenWidth/ 2 + 30)
  const [obstacleNegHeight , setObstacleNegHeight] = useState(0)
  const [obstacleNegHeightTwo , setObstacleNegHeightTwo] = useState(0)
  const [isGameOver , setIsGameOver] = useState(false)
  const [score , SetScore] = useState(0)
  const gravity = 3
  let obstacleWidth = 60
  let ObstacleHeight = 300
  let gap = 200
  let gameTimerId
  let obstaclesTimerId


  useEffect(()=>{
    if(birdBottom > 0){
      gameTimerId = setInterval(()=>{
        setBirdBottom(birdBottom => birdBottom - 3)
      }, 30)

      return () => {
        clearInterval(gameTimerId)
      }
    }
  }, [birdBottom])

  useEffect(()=>{
    if(obstacleLeft > -60){
      obstaclesTimerId = setInterval(()=>{
        setObstacleLeft(obstacleLeft => obstacleLeft - 5)
      }, 30)
      return () => {
        clearInterval(obstaclesTimerId)
      }
    }else{
      setObstacleLeft(screenWidth)
      setObstacleNegHeight(- Math.random() * 100)
      SetScore(score + 1)
    }
}, [obstacleLeft])

  useEffect(()=>{
    if(obstacleLeftTwo > -60){
      obstaclesTimerId = setInterval(()=>{
        setObstacleLeftTwo(obstacleLeftTwo => obstacleLeftTwo - 5)
      }, 30)
      return () => {
        clearInterval(obstaclesTimerId)
      }
    }else{
      setObstacleLeftTwo(screenWidth)
      setObstacleNegHeightTwo(- Math.random() * 100)
      SetScore(score + 1)
    }
     
    useEffect(()=>{
      if(
        (birdBottom < (obstacleNegHeight + ObstacleHeight + 30) ||
        birdBottom > (obstacleNegHeight + ObstacleHeight + gap - 30)) &&
        (obstacleLeft > screenWidth/2 - 30 && obstacleLeft < screenWidth/2 + 30)
      ){
        gameOver()
      }
    }, [birdBottom , obstacleNegHeight , obstacleLeft])

    useEffect(()=>{
      if(
        (birdBottom < (obstacleNegHeightTwo + ObstacleHeight + 30) ||
        birdBottom > (obstacleNegHeightTwo + ObstacleHeight + gap - 30)) &&
        (obstacleLeftTwo > screenWidth/2 - 30 && obstacleLeftTwo < screenWidth/2 + 30)
      ){
        gameOver()
      }
    }, [birdBottom , obstacleNegHeightTwo , obstacleLeftTwo])
  }
)

  const jump = () => {
    if(!isGameOver && (birdBottom < screenHeight)){
      setBirdBottom(birdBottom => birdBottom + 50)
      console.log("jumped")
    }
  }

  useEffect(()=>{
    if (
      ((birdBottom < (obstacleNegHeight + ObstacleHeight + 30) ||
      birdBottom > (obstacleNegHeight + ObstacleHeight + gap - 30)) &&
      (obstacleLeft > screenWidth/2 - 30 && obstacleLeft < screenWidth/2 + 30)
    )
    ||
    ((birdBottom < (obstacleNegHeightTwo + ObstacleHeight + 30) ||
      birdBottom > (obstacleNegHeightTwo + ObstacleHeight + gap - 30)) &&
      (obstacleLeftTwo > screenWidth/2 - 30 && obstacleLeftTwo < screenWidth/2 + 30)
    )
    ){
      gameOver()
    }
  }, [birdBottom , obstacleNegHeight , obstacleLeft , obstacleNegHeightTwo , obstacleLeftTwo])

}