<template>
  <div class="min-h-screen bg-slate-700 text-white flex flex-col justify-center items-center">
    <h1 class="text-5xl font-semibold mb-6" >{{ title }}</h1>
    <div>
      <p v-if="winner">{{ winner }} wins!</p>
      <p v-else-if="isDraw">It's a draw!</p>
      <p v-else>Current Player: {{ xIsNext ? 'Player One (X)' : 'Player Two (O)' }}</p>
    </div>
    <div class="grid grid-cols-3 border border-white mb-6 mt-4 mx-4" @click="triggerAnimation" :class="{'animate-wiggle': wiggleAnimation}">
      <div
        v-for="(cell, index) in cells"
        :key="index"
        @click="makeMove(index)"
        class="border border-white flex justify-center items-center text-4xl h-24 w-24 md:h-32 md:w-32 cursor-pointer hover:bg-slate-600"
        :class="{ 'bg-slate-600 text-teal-400': isWinningCell(index) }"
      >
        {{ cell }}
      </div>
    </div>
    <button @click="resetBoard" class="px-4 py-2 bg-teal-500 rounded-md hover:bg-teal-400">Restart Game</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const title = 'Tic Tac Toe'
const cells = ref(Array(9).fill(null))
const xIsNext = ref(true)
const wiggleAnimation = ref(false)

const winningCombination = ref([])
const calculateWinner = () => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (const [a, b, c] of lines) {
    if (cells.value[a] && cells.value[a] === cells.value[b] && cells.value[a] === cells.value[c]) {
      winningCombination.value = [a, b, c]
      return cells.value[a] === 'X' ? 'Player One' : 'Player Two'
    }
  }

  return null
};

const winner = computed(() => {
  const result = calculateWinner()
  return result ? result : null
})

const isDraw = computed(() => {
  return !winner.value && cells.value.every(cell => cell !== null)
})

const isWinningCell = (index) => {
  return winningCombination.value.includes(index)
}

const makeMove = (index) => {
  if (cells.value[index] || winner.value) {
    return
  }
  
  cells.value[index] = xIsNext.value ? 'X' : 'O'
  xIsNext.value = !xIsNext.value
}

const resetBoard = () => {
  cells.value = Array(9).fill(null)
  xIsNext.value = true
  winningCombination.value = []
  wiggleAnimation.value = false
}

const triggerAnimation = () => {
  if(winner.value || isDraw.value) {
    wiggleAnimation.value = true
    console.log('trigered')
    setTimeout(() => {
      wiggleAnimation.value = false
    }, 500);
  } 
}

</script>
