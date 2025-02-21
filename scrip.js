const toggleButtons = document.querySelectorAll('.toggle-button');
        const priceElements = document.querySelectorAll('.price');

        toggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Убираем класс "active" у всех кнопок
                toggleButtons.forEach(btn => btn.classList.remove('active'));
                // Добавляем класс "active" к нажатой кнопке
                button.classList.add('active');

                const period = button.dataset.period; // Получаем период (monthly или yearly)

                priceElements.forEach(priceElement => {
                    const monthlyPrice = priceElement.dataset.monthly;
                    const yearlyPrice = priceElement.dataset.yearly;

                    if (period === 'monthly') {
                        priceElement.innerHTML = `${monthlyPrice} руб.<span>/месяц</span>`;
                    } else {
                        priceElement.innerHTML = `${yearlyPrice} руб.<span>/год</span>`;
                    }
                });
            });
        });