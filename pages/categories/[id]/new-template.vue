<script setup lang="ts">
import { storeToRefs } from 'pinia'
import IcRoundDelete from '~icons/ic/round-delete'

const createInitialSectionData = () => ({
  id: Date.now(),
})

const createInitialPartData = () => ({
  id: Date.now(),
  totalQuestions: '',
  totalTime: '',
  totalMarks: '',
  passMarks: '',
  correctMarks: '',
  wrongMarks: '',
  sections: [createInitialSectionData()],
})

const partsData = ref([createInitialPartData()])

const subjectsStore = useSubjectsStore()
const { subjects, loading } = storeToRefs(subjectsStore)
await subjectsStore.initSubjects()
</script>

<template>
  <div class="flex flex-col m-2 my-4 gap-4">
    <div class="flex justify-between max-w-screen-2xl">
      <p class="text-2xl font-bold">
        Create template
      </p>
      <button class="btn btn-primary px-8">
        Save
      </button>
    </div>
    <div class="flex space-x-6 w-full max-w-screen-2xl">
      <Card class="h-36">
        <template #body>
          <div class="flex space-x-6">
            <div class="avatar">
              <div class="mask mask-squircle w-16 h-16">
                <img src="https://lhfxytbzmhueutwptcpo.supabase.co/storage/v1/object/public/assets/images/input/6a377050-805e-4fdf-a9d8-9067ac2a4a6e-1663848097095.jpg">
              </div>
            </div>
            <div class="flex flex-col items-baseline gap-2">
              <div class="text-lg">
                <strong>Entry</strong> - Indian Army
              </div>
              <div>
                <strong>Category</strong> - Army Soldier
              </div>
            </div>
          </div>
        </template>
      </Card>
      <div class="flex-grow space-y-4">
        <Card v-for="(part, i) in partsData" :key="part.id">
          <template #header>
            <div class="flex">
              <p class="font-bold text-lg">
                Part - {{ i + 1 }}
              </p>
              <button v-if="i >= 1" class="btn btn-error btn-sm" @click="partsData = partsData.filter(p => p.id !== part.id)">
                <IcRoundDelete />
              </button>
            </div>
          </template>
          <template #body>
            <div class="flex space-x-6">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text font-bold">Total Questions</span>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full">
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text font-bold">Time (in minutes)</span>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full">
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text font-bold">Total Marks</span>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full">
              </div>
            </div>
            <div class="flex space-x-6">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text font-bold">Passing Marks</span>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full">
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text font-bold">Marks for each correct answer.</span>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full">
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text font-bold">Marks deducted for each wrong answer</span>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full">
              </div>
            </div>
            <div class="divider" />
            <div v-for="(section, si) in part.sections" :key="section.id" class="flex space-x-6">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text font-bold">Subject</span>
                </label>
                <select class="select select-bordered">
                  <option v-for="subject in subjects" :key="subject.id" :value="subject.id">
                    {{ subject.name }}
                  </option>
                </select>
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text font-bold">Levels</span>
                </label>
                <select class="select select-bordered">
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text font-bold">Total Questions</span>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full">
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text font-bold">Total Marks</span>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full">
              </div>
              <div class="mt-11">
                <button v-if="si >= 1" class="btn btn-error btn-sm" @click="part.sections = part.sections.filter(p => p.id !== section.id)">
                  <IcRoundDelete />
                </button>
                <button v-else class="btn btn-ghost btn-sm px-5" />
              </div>
            </div>
            <div class="text-center mt-3">
              <button class="btn btn-sm btn-ghost" @click="part.sections.push(createInitialSectionData())">
                Add another section
              </button>
            </div>
          </template>
        </Card>
        <button class="btn btn-block text-white" @click="partsData.push(createInitialPartData())">
          Add another part
        </button>
      </div>
    </div>
  </div>
</template>
