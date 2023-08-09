export default {
  async registerCoach(context, data) {
    console.log(data, 'data');

    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.firstName,
      lastName: data.lastName,
      description: data.description,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(`https://coaches-c1610-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
      method: 'PUT',
      body: JSON.stringify(coachData),
    });

    // const responseData = await response.json();

    if (!response.ok) {
      console.log(response.message);
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },
};