<script setup>
</script>

<template>
    <section class="contact">
        <div class="container">
            <h3 class="text-center">CONTACT</h3>
            <form>
                <div class="group">
                    <input type="text" name="guestName" id="guestName" maxlength="10" placeholder="">
                    <label for="guestName">Name</label>
                </div>
                <div class="group">
                    <input type="email" name="guestEmail" id="guestEmail" maxlength="20" placeholder="">
                    <label for="guestEmail">Email</label>
                </div>
                <div class="group">
                    <textarea name="guestMessage" id="guestMessage" cols="30" rows="10" maxlength="500"
                        placeholder=""></textarea>
                    <label for="guestMessage">Message</label>
                </div>
                <div class="group text-center">
                    <button type="button" class="btn rect">Send Letter</button>
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
            color: $primaryColor;

            input,
            textarea {
                font-size: 1rem;
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
                line-height: 2rem;
                position: absolute;
                left: 1rem;
                top: 1rem;
                pointer-events: none;
                transition: font-size 0.2s ease-in-out,transform 0.2s ease-in-out;
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