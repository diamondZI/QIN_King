import {h,render} from 'vue'
import second from '@/components/card.vue'
export function alert(ONPEN:HTMLDivElement){
const VNdoe=h(second)
const container=document.createElement('div');
ONPEN.appendChild(container)
render(VNdoe,container)
}