import {put, takeEvery} from 'redux-saga/effects'
import { decrement, increment } from '../store/counterSlice';

//TODO: Я зрен знает как к нему прикрутить counter

const delay = (ms) => new Promise(res => setTimeout(res, ms));

// Сама суть - логика
function* incrementWorker() {
  // Ставим перед выполнением любого async действия yield
  yield delay(1000);
  yield put(increment())
}

// Тоже самое НО немного другое.
function* decrementWorker() {
  yield delay(1000);
  yield put(decrement())
}

// Оно будет следить за тем, чтобы выполнился worker
export function* counterWatcher() {
  // Первым - тип action за которым ведется слежка. Вторым - цель,что нужно сделать
  yield takeEvery('ADD_ASYNC', incrementWorker);
  yield takeEvery('REMOVE_ASYNC', decrementWorker);
}