<script setup>
</script>

<template>
    <section class="contact">
        <div class="container">
            <h3>CONTACT</h3>
            <form>
                <div class="group">
                    <input type="text" name="guestName" id="guestName">
                    <label for="guestName">請輸入大名</label>
                </div>
                <div class="group">
                    <input type="email" name="guestEmail" id="guestEmail">
                    <label for="guestEmail">請輸入Email</label>
                </div>
                <div class="group">
                    <textarea name="guestMessage" id="guestMessage" cols="30" rows="10"></textarea>
                    <label for="guestMessage">請輸入你想傳達的訊息</label>
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
        text-align: center;
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
                width: 100%;
                line-height: 2rem;
                font-size: 1rem;
            }

            label {
                position: absolute;
                left: 1rem;
                top: 50%;
                transform: translateY(-50%);
                pointer-events: none;
            }

            textarea {
                resize: none;

                &+label {
                    top: 0.4rem;
                    transform: translateY(0);
                }
            }
        }
    }
}
</style>