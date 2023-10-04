<script setup>
import { ref } from "vue";
const isDisabled = ref(false);
const sendBtnText = ref("SEND");
const send = () => {
    isDisabled.value = true;
    setTimeout(() => isDisabled.value = false, 3000);
}


</script>

<template>
    <section class="contact">
        <div class="container">
            <h3 class="text-center">CONTACT</h3>
            <form @submit.prevent="send">
                <div class="group">
                    <input type="text" name="guestName" id="guestName" maxlength="30" placeholder="Name" required
                        :disabled="isDisabled">
                    <label for="guestName">GUEST NAME</label>
                </div>
                <div class="group">
                    <input type="email" name="guestEmail" id="guestEmail" maxlength="30" placeholder="Email" required
                        :disabled="isDisabled">
                    <label for="guestEmail">GUEST EMAIL</label>
                </div>
                <div class="group">
                    <textarea name="guestMessage" id="guestMessage" cols="30" rows="10" maxlength="500"
                        placeholder="Message" required v-save :disabled="isDisabled"></textarea>
                    <label for="guestMessage">GUEST MESSAGE</label>
                </div>
                <div class="group text-center">
                    <button type="submit" class="btn rect">SEND</button>
                </div>
            </form>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;

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
                background-color: $secondaryColor;
                border: none;

                &:focus {
                    background-color: $fourthColor;
                    outline-color: $secondaryColor;
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
</style>