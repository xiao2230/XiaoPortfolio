<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const guestName = ref("");
const guestEmail = ref("");
const guestMessage = ref("");
const isDisabled = ref(false);
const sendBtnText = ref("SEND");
const toast = ref("hide");
const contact = ref(null);
const h3 = ref(null);
const form = ref(null);
const tl = gsap.timeline();
let timer = null;

const send = () => {
    isDisabled.value = true;
    sendBtnText.value = "WAIT";
    setTimeout(() => {
        guestName.value = "";
        guestEmail.value = "";
        guestMessage.value = "";
        isDisabled.value = false;
        sendBtnText.value = "SEND";
        toast.value = "show";
        timer = setTimeout(() => toast.value = "hide", 5000);
    }, 2000);
}

const closeToast = () => {
    toast.value = "hide";
    clearTimeout(timer);
};

onMounted(() => {
    if (sessionStorage["guestMessage"]) guestMessage.value = sessionStorage["guestMessage"];

    tl
        .fromTo(h3.value, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1 })
        .fromTo(form.value, { y: "3vh", opacity: 0 }, { y: 0, opacity: 1 });

    ScrollTrigger.create({
        animation: tl,
        trigger: contact.value,
        start: "top 85%",
        end: "bottom 90%",
        scrub: true
    });
});

onUnmounted(() => tl.kill());
</script>

<template>
    <section ref="contact" class="contact">
        <div class="container">
            <h3 ref="h3" class="text-center">CONTACT</h3>
            <form ref="form" @submit.prevent="send">
                <div class="group">
                    <input type="text" name="guestName" id="guestName" maxlength="30" placeholder="Name" v-model="guestName"
                        required :disabled="isDisabled">
                    <label for="guestName">GUEST NAME</label>
                </div>
                <div class="group">
                    <input type="email" name="guestEmail" id="guestEmail" maxlength="30" placeholder="Email"
                        v-model="guestEmail" required :disabled="isDisabled">
                    <label for="guestEmail">GUEST EMAIL</label>
                </div>
                <div class="group">
                    <textarea name="guestMessage" id="guestMessage" cols="30" rows="10" maxlength="500"
                        placeholder="Message" v-model="guestMessage" v-save="guestMessage" required
                        :disabled="isDisabled"></textarea>
                    <label for="guestMessage">GUEST MESSAGE</label>
                </div>
                <div class="group text-center">
                    <button type="submit" class="btn rect" :disabled="isDisabled">{{ sendBtnText }}</button>
                </div>
            </form>
        </div>
    </section>

    <Transition name="toast">
        <div v-show="toast === 'show'" class="toast" role="alert">
            <div class="toastHeader">
                <span class="logo">XP</span>
                <strong class="name">XiaoPortfolio</strong>
                <button type="button" class="closeToastBtn" @click="closeToast"><span></span></button>
            </div>
            <div class="toastBody">
                Sent successfully
            </div>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;

    >* {
        transition: transform 0.2s ease-out, opacity 0.2s ease-out;
    }

    h3 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 2rem;
    }

    form {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .group {
            margin-bottom: 1rem;
            position: relative;

            input,
            textarea {
                font-size: 1rem;
                color: $primaryColor;
                width: 100%;
                line-height: 2rem;
                padding: 1.5rem 1rem 0.5rem;
                background-color: $fourthColor;
                border: none;

                &:focus {
                    background-color: $secondaryColor;
                    outline-color: $fourthColor;
                }
            }

            textarea {
                resize: none;
            }

            label {
                color: $primaryColor;
                line-height: 2rem;
                position: absolute;
                left: 1rem;
                top: 1rem;
                pointer-events: none;
                transition: font-size 0.2s ease-in-out, transform 0.2s ease-in-out;
            }

            :is(input, textarea):is(:focus, :not(:placeholder-shown))+label {
                font-size: 0.9rem;
                font-weight: 700;
                transform: translateY(-1rem);
            }
        }
    }
}

.toast {
    color: $primaryColor;
    width: 300px;
    margin: 1rem;
    border: 1px solid $primaryColor;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 999;

    .toastHeader {
        padding: 0.5rem 0.8rem;
        background-color: $secondaryColor;

        .logo {
            color: $secondaryColor;
            background-color: $primaryColor;
            width: 2rem;
            aspect-ratio: 1;
            border-radius: 50%;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            margin-right: 0.5rem;
        }

        .closeToastBtn {
            width: 1.5rem;
            aspect-ratio: 1;
            float: right;
            cursor: pointer;

            &:hover {
                filter: drop-shadow(0 0 2px $primaryColor) drop-shadow(0 0 8px $primaryColor);
            }

            span {
                display: inline-block;
                height: 4px;
                width: 100%;
                background-color: $primaryColor;
                transform: rotateZ(45deg);
                position: relative;

                &::after {
                    content: "";
                    display: inline-block;
                    height: 4px;
                    width: 100%;
                    background-color: $primaryColor;
                    position: absolute;
                    top: 0;
                    left: 0;
                    transform: rotateZ(90deg);
                }
            }
        }
    }

    .toastBody {
        padding: 0.8rem;
        background-color: $fourthColor;
    }

    &.toast-enter-active,
    &.toast-leave-active {
        will-change: transform, opacity;
        transition: opacity 0.5s ease, transform 0.8s ease;
    }

    &.toast-enter-from,
    &.toast-leave-to {
        opacity: 0;
        transform: translateY(2rem);
    }
}
</style>