<template>
    <div class="survey-container" v-if="this.surveyStateStore.surveyState">
      <Wizard
        squared-tabs
        card-background
        scrollable-tabs
        :nextButton="{
          text: 'Next',
          icon: '',
          hideIcon: false,
          hideText: false
        }"
        :backButton="{
          text: 'Back',
          icon: '',
          hideIcon: false,
          hideText: false
        }"
        :doneButton="{
          text: 'Done',
          icon: '',
          hideIcon: false,
          hideText: false
        }"
        :custom-tabs="[
          {
            title: 'Step 1',
          },
          {
            title: 'Step 2',
          },
          {
            title: 'Step 3',
          },
          {
            title: 'Step 4',
          },
          {
            title: 'Step 5',
          },
          {
            title: 'Step 6',
          },
          {
            title: 'Step 7',
          },
          {
            title: 'Step 8',
          },
          {
            title: 'Step 9',
          },
          {
            title: 'Step 10',
          },
          {
            title: 'Summary',
          }
        ]"
        :beforeChange="onTabBeforeChange"
        @change="onChangeCurrentTab"
        @complete:wizard="wizardCompleted"
      >
        <div v-if="currentTabIndex === 0">
            <p> What is your name? </p>
            <br>
            <input type="text" v-model="ans[0]">
        </div>

        <div v-if="currentTabIndex === 1">
            <p>What is your date of birth? </p>
            <br>
            <Datepicker
            :enable-time-picker="false"
            v-model="ans[1]"
            ></Datepicker>
        </div>
        
        <div v-if="currentTabIndex === 2">
            <p>What is your favorite sport?</p>
            <br>
            <input type="text" v-model="ans[2]">
        </div>

        <div v-if="currentTabIndex === 3">
            <p>What gender do you identify as?</p>
            <br>
            <select v-model="ans[3]">
                <option value="Male"> Male</option>
                <option value="Female"> Female</option>
                <option value="Other"> Other </option>
            </select>
        </div>

        <div v-if="currentTabIndex === 4">
            <p>What language(s) do you speak?</p>
            <br>
            <div class="checkbox-container">
                <input type="checkbox" id="lang1" name="lang1" value="English" v-model="ans[4][0]">
                <label for="lang1">English</label><br>
                <input type="checkbox" id="lang2" name="lang2" value="French" v-model="ans[4][1]">
                <label for="lang2">French</label><br>
                <input type="checkbox" id="lang3" name="lang3" value="German" v-model="ans[4][2]">
                <label for="lang3">German</label>
            </div>
        </div>

        <div v-if="currentTabIndex === 5">
            <p>What is your email?</p>
            <br>
            <input type="text" v-model="ans[5]" @input="isEmailValid">
            <span v-show="wrongEmail" style="color : red">Incorrect email address</span>
        </div>

        <div v-if="currentTabIndex === 6">
            <p>What is your favorite number?</p>
            <br>
            <input type="text" v-model="ans[6]">
        </div>

        <div v-if="currentTabIndex === 7">
            <p>What is your favorite cartoon?</p>
            <br>
            <input type="text" v-model="ans[7]">
        </div>

        <div v-if="currentTabIndex === 8">
            <p>What is your favorite food?</p>
            <br>
            <input type="text" v-model="ans[8]">
        </div>

        <div v-if="currentTabIndex === 9">
            <p>What is your favorite color?</p>
            <br>
            <input type="text" v-model="ans[9]">
        </div>

        <div v-if="currentTabIndex === 10">
            <b> What is your name? </b>
            <p>{{ ans[0] }}</p>
            <b>What is your date of birth? </b>
            <p>{{new Date( ans[1]).toDateString() }}</p>
            <b> What is your favorite sport? </b>
            <p>{{ ans[2] }}</p>
            <b> What gender do you identify as? </b>
            <p>{{ ans[3] }}</p>
            <b> What language(s) do you speak? </b>
            <p>{{ ans[4][0] === true ? 'English' : '' }}</p>
            <p>{{ ans[4][1] === true ? 'French' : '' }}</p>
            <p>{{ ans[4][2] === true ? 'German' : '' }}</p>
            <b> What is your email? </b>
            <p>{{ ans[5] }}</p>
            <b> What is your favorite number? </b>
            <p>{{ ans[6] }}</p>
            <b> What is your favorite cartoon? </b>
            <p>{{ ans[7] }}</p>
            <b> What is your favorite food? </b>
            <p>{{ ans[8] }}</p>
            <b> What is your favorite color? </b>
            <p>{{ ans[9] }}</p>
        </div>

      </Wizard>
    </div>
</template>

<script setup>
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
    import { useSurveyStateStore } from '../stores/surveyState'
    import Wizard from 'form-wizard-vue3';
    import { ref } from 'vue'

    const surveyStateStore = useSurveyStateStore()
    // eslint-disable-next-line
    const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let currentTabIndex = ref(0)
    let wrongEmail = ref(false)
    let ans = ref([
        localStorage.getItem('ans-0') === null ? '' : localStorage.getItem('ans-0'),
        localStorage.getItem('ans-1') === null ? null : localStorage.getItem('ans-1'),
        localStorage.getItem('ans-2') === null ? '' : localStorage.getItem('ans-2'),
        localStorage.getItem('ans-3') === null ? '' : localStorage.getItem('ans-3'),
        [   
            localStorage.getItem('ans-4-0') === null || Boolean(localStorage.getItem('ans-4-0')) === false ? '' : Boolean(localStorage.getItem('ans-4-0')),
            localStorage.getItem('ans-4-1') === null || Boolean(localStorage.getItem('ans-4-1')) === false ? '' : Boolean(localStorage.getItem('ans-4-1')),
            localStorage.getItem('ans-4-2') === null || Boolean(localStorage.getItem('ans-4-2')) === false ? '' : Boolean(localStorage.getItem('ans-4-2'))
        ],
        localStorage.getItem('ans-5') === null ? '' : localStorage.getItem('ans-5'),
        localStorage.getItem('ans-6') === null ? '' : localStorage.getItem('ans-6'),
        localStorage.getItem('ans-7') === null ? '' : localStorage.getItem('ans-7'),
        localStorage.getItem('ans-8') === null ? '' : localStorage.getItem('ans-8'),
        localStorage.getItem('ans-9') === null ? '' : localStorage.getItem('ans-9'),
    ])


    function onChangeCurrentTab(index, oldIndex) {
        console.log(index, oldIndex)
        currentTabIndex.value = index
        if (oldIndex !== undefined) {
            console.log(typeof oldIndex)
            console.log(ans.value[oldIndex])
            if (oldIndex === 4) {
                localStorage.setItem('ans-4-0', ans.value[oldIndex][0])
                localStorage.setItem('ans-4-1', ans.value[oldIndex][1])
                localStorage.setItem('ans-4-2', ans.value[oldIndex][2])
            } else {
                localStorage.setItem('ans-' + oldIndex, ans.value[oldIndex])
            }
        }
    }
    function wizardCompleted() {
        console.log('Survey Completed')
        localStorage.clear()
        location.reload()
    }

    function isEmailValid() {
      if (emailRe.test(ans.value[5])) {
        wrongEmail.value = false;
      } else {
        wrongEmail.value = true;
      }
    }

    console.log(surveyStateStore.surveyState)
</script>

<style>
    .fw-body {
        max-height: 400px;
        overflow-y: scroll;
    }
    input:not([type='checkbox']):not(.dp__pointer), select {
        background-color: #fff;
        border-radius: 4px;
        font-family: -apple-system,blinkmacsystemfont,"Segoe UI",roboto,oxygen,ubuntu,cantarell,"Open Sans","Helvetica Neue",sans-serif;
        border: 1px solid #ddd;
        outline: none;
        transition: border-color .2s cubic-bezier(0.645, 0.045, 0.355, 1);
        width: 100%;
        font-size: 1rem;
        line-height: 1.5rem;
        padding: 6px 12px;
        color: #212121;
        box-sizing: border-box;
    }

    input[type='checkbox']{
        cursor: pointer;
    }

    .checkbox-container {
        display: inline-flex;
    }

    .checkbox-container label {
        margin: 0px 10px;
    }
    .dp__select {
        color: black;
    }

    @media only screen and (max-width: 768px) {
        .fw-body {
            max-height: 320px;
        }

        .checkbox-container {
            display: inline-grid;
        }
    }
</style>

