import * as core from '@actions/core'
import fetch from 'node-fetch';
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const url: string = core.getInput('feedurl')
    core.debug(`fetching data from ${url}  ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

    core.debug(new Date().toTimeString())
    const res = await fetch(url).then((res)=> res.json());
    core.debug(`${res}`)

    // core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
