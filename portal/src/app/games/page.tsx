import AviatorGame from '@/components/Games/Aviator/Aviator'
import BallGame from '@/components/Games/BallFall/BallFall'
import DragonTower from '@/components/Games/DragonTower/DragonTower'
import BombGame from '@/components/Games/Mines/Mines'
import WheelGame from '@/components/Games/SpinningWheels/SpinningWheel'
import { Table } from '@/components/Games/SpinningWheels/Table'
import { Wheel } from '@/components/Games/SpinningWheels/Wheel'
import Roulette from '@/components/Games/SpinningWheels/WheelGame'
import { Box } from '@mui/material'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div>
      
      {/* <AviatorGame/> */}
      {/* <DragonTower/> */}
      {/* <BombGame/> */}
      {/* <BallGame/> */}
      {/* <WheelGame/> */}
      {/* <Roulette/> */}
    {/* <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      width: '100%'
    }}>
    <Table/>
    <Wheel/>
    </Box> */}
    </div>
  )
}