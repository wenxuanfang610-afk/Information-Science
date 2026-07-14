// ==================== 1. BMI 计算器逻辑 (Trivia 页面) ====================
function calculateBMI() {
    // 获取用户输入的数值
    const heightInput = document.getElementById('height').value;
    const weightInput = document.getElementById('weight').value;
    const resultArea = document.getElementById('bmiResult');

    // 清空上次结果
    resultArea.innerHTML = "";
    resultArea.style.backgroundColor = "";

    // 基础输入验证
    if (!heightInput || !weightInput || heightInput <= 0 || weightInput <= 0) {
        resultArea.innerHTML = "❌ Please enter valid positive numbers for height and weight.";
        resultArea.style.backgroundColor = "#fadbd8";
        resultArea.style.color = "#c0392b";
        return;
    }

    // 将身高转换为米 (cm -> m)
    const heightInMeters = heightInput / 100;
    
    // 计算 BMI 公式: weight (kg) / height^2 (m^2)
    const bmi = (weightInput / (heightInMeters * heightInMeters)).toFixed(1);
    
    // 判断健康分类
    let category = "";
    let color = "";
    let bgColor = "";

    if (bmi < 18.5) {
        category = "Underweight";
        color = "#7f8c8d";
        bgColor = "#eaeded";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal Weight (Healthy) 🎉";
        color = "#27ae60";
        bgColor = "#d4efdf";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
        color = "#d35400";
        bgColor = "#fdebd0";
    } else {
        category = "Obese ⚠️";
        color = "#c0392b";
        bgColor = "#fadbd8";
    }

    // 动态在网页上输出结果
    resultArea.style.backgroundColor = bgColor;
    resultArea.style.color = color;
    resultArea.innerHTML = `Your BMI is <strong>${bmi}</strong>.<br>Category: <strong>${category}</strong>`;
}

// ==================== 2. 表单验证逻辑 (右侧边栏通用) ====================
function validateContact(event) {
    // 阻止表单默认的刷新页面提交行为
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('formFeedback');

    // 简单的邮件格式正则校验
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2) {
        feedback.style.color = "#e74c3c";
        feedback.textContent = "❌ Name must be at least 2 characters.";
        return false;
    }

    if (!emailPattern.test(email)) {
        feedback.style.color = "#e74c3c";
        feedback.textContent = "❌ Please enter a valid email address.";
        return false;
    }

    if (message.length < 5) {
        feedback.style.color = "#e74c3c";
        feedback.textContent = "❌ Message is too short (min 5 characters).";
        return false;
    }

    // 验证成功
    feedback.style.color = "#2ecc71";
    feedback.textContent = "✅ Message sent successfully!";
    
    // 重置输入表单
    document.getElementById('contactForm').reset();
    return true;
}
