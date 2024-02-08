import {put, takeEvery} from 'redux-saga/effects'
import { asyncDecrement, asyncIncrement, decrement, increment } from '../store/counterSlice';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

// Сама суть - логика
function* incrementWorker() {
  // Ставим перед выполнением любого async действия yield
  yield delay(1000);
  yield put(increment())
}
function* decrementWorker() {
  yield delay(1000);
  yield put(decrement())
}

// Оно будет следить за тем, чтобы выполнился worker
/* Суть такова, что при вызове функции из хранилища, этот
 * whatcher прикручивает дополнительную функцию(логику).
 */
export function* counterWatcher() {
  // Первым - тип action за которым ведется слежка. Вторым - цель,что нужно сделать
  yield takeEvery(asyncIncrement, incrementWorker);
  yield takeEvery(asyncDecrement, decrementWorker);
}